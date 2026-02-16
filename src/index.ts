import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Bindings }>()
app.use('*', cors())

function similarity(a: string, b: string) {
  const wordsA = a.toLowerCase().split(/\W+/)
  const wordsB = b.toLowerCase().split(/\W+/)
  const setA = new Set(wordsA)
  const setB = new Set(wordsB)

  let common = 0
  setA.forEach(word=>{
    if(setB.has(word)) common++
  })

  const score = (common / Math.sqrt(setA.size * setB.size)) * 100
  return Math.round(score)
}
app.post('/uploadResume', async (c)=>{

const { resume } = await c.req.json()

await c.env.resume_db.prepare(
"INSERT INTO resumes(resume_text) VALUES(?)"
).bind(resume).run()

return c.json({msg:"Resume Saved"})

})
app.get('/getResumes', async (c)=>{

const data = await c.env.resume_db.prepare(
"SELECT * FROM resumes"
).all()

return c.json(data.results)

})
app.delete('/deleteResume/:id', async (c)=>{

let id = c.req.param('id')

await c.env.resume_db.prepare(
"DELETE FROM resumes WHERE id=?"
).bind(id).run()

return c.json({msg:"Deleted"})

})


app.post('/matchResume', async (c) => {
  const { resume, job } = await c.req.json()
  const score = similarity(resume, job)
  return c.json({ score })
})

app.all('*', async (c) => {
  return c.env.ASSETS.fetch(c.req.raw)
})

export default app
