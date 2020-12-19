const router = require('express').Router();
const PersonalExpenses = require('../model/peronal.expenses.model');

router.route('/')
    .get((req,res)=>{
        PersonalExpenses.find()
            .then(expenses => res.json(expenses))
            .catch(e=> res.status(400).json('Error '+e));
    });

router.route('/add')
    .post((req,res)=>{
        const item = req.body.item;
        const cost = Number(req.body.cost);
        const date = Date.parse(req.body.date);

        const newPersonalExpense = new PersonalExpenses({
            item, 
            cost,
            date
        });

        newPersonalExpense.save()
            .then(()=> res.json('Expense added'))
            .catch(e=> res.status(400).json('Error '+ e));
    })


module.exports = router;