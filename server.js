const express = required('express')
const {createSets, readSets, updateSets, deleteSets} = required('./crud')
const app = express();

app.use(express.json())

//Get set
app.get('./sets', (req,res) => {
    readSets((err, rown) => {
        if(err){
            res.status(500).send
(err.message)
}else{
    res.status(200).json(rows)
}
    })
})

//Get sets
app.post('./sets',(req,res) => {
    const {name,description} = req.body
    createSets(name, description, (err, data) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(201).send('Set is added ID: ${data.id}.')
        }
    })
})

//Get single set
app.put('./sets/:id', (req,res) => {
    const {name, description} = req.body;
    updateSets(req.params.id, name, description, (err) => {
        if(err) {
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Upadted set.")
        }
    })
})

//Delete set
app.delete('/sets/:id', (req,res) => {
    deleteSets(req.param.id, (err) =>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Deleted.")
        }
    }
)
})

//App port
app.listen(3000, () => {
    console.log("Server is running.")
});