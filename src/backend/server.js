const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    'host': 'csce-315-db.engr.tamu.edu',
    'user': 'csce315331_team_62_master',
    'database': 'csce315331_team_62',
    'password': 'panda',
    'port': '5432'

});
app.get('/queryInventory/:start/:end', async (req, res) => {
    try {
      const start = parseInt(req.params.start);
      const end = parseInt(req.params.end);
      var queryToUse;
      if((start === 0) && (end === 0)){
        queryToUse = 'SELECT * FROM inventory ORDER BY id limit 10';
      }
      else{
        queryToUse = 'SELECT * FROM inventory WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
      }
      // console.log(queryToUse)

      const { rows } = await pool.query(queryToUse);
      res.json(rows);
      //console.log(rows);
    } catch (err) {

      console.error("Read query in inventory failed " +err);
      res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/queryProducts/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM products ORDER BY id limit 10';
    } 
    else{
      queryToUse = 'SELECT * FROM products WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/queryCustomizations/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM customizations ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM customizations WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/querySales/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM sales ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM sales WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/queryOrders/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM orders ORDER BY sale_id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM orders WHERE id >= ' + start + ' AND sale_id <= ' + end + ' ORDER BY sale_id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/queryEmployees/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM employees ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM employees  WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/queryCustomers/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM customers ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM customers WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/queryRecipes/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM recipes ORDER BY product_id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM recipes WHERE product_id >= ' + start + ' AND product_id <= ' + end + ' ORDER BY product_id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/querySizes/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM sizes ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM sizes WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/queryReports/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM reports ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM reports WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
    }
    // console.log(queryToUse);

    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);
  } catch (err) {

    console.error("Read query in inventory failed " +err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/add-item', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO inventory (id, item_name, item_type, item_quantity, item_unit, item_price, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.type}', '${itemInfo.quantity}', '${itemInfo.unit}', '${itemInfo.price}', '${itemInfo.date}');`;
    // console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/add-product', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO products (id, product_name, product_type, product_price, product_description, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.type}', '${itemInfo.price}', '${itemInfo.description}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/add-employees', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO employees (id, employee_name, employee_position, employee_phone, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.position}', '${itemInfo.phone}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/add-customers', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO customers (id, customer_name, customer_phone, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.phone}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/add-recipes', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO recipes (product_id, inventory_id, inventory_item, quantity, unit, date_of_last_update)
    VALUES ('${itemInfo.p_id}', '${itemInfo.i_id}', '${itemInfo.i_item}', '${itemInfo.quantity}', '${itemInfo.unit}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);  
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/salesReport/:start/:end', async (req, res) => {
  try {
    const start = req.params.start;
    const end = req.params.end;
    const queryToUse = "SELECT p.product_name, COUNT(*) AS total_sales "+
         "FROM orders o "+
         "JOIN sales s ON o.sale_id = s.id " +
         "JOIN products p ON o.product_id = p.id " +
         "WHERE s.date BETWEEN '"+start+"' AND '"+end+"' " + 
         "GROUP BY p.product_name "+
         "ORDER BY total_sales DESC;";
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
  } catch (err) {
    console.error("Read query in sales failed " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/XReport', async (req, res) => {
  try {
    const queryToUse = `SELECT SUM(Total) AS Total_Sales
    FROM Sales
    WHERE Date = '2023-03-22';`;

    console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.table(rows);

  } catch (err) {
    console.error("Read failed with error in X Report Request: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/GetZReport', async (req, res) => {
  try {
    const queryToUse = `SELECT * FROM z_reports;`
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    // console.table(rows);

  } catch (err) {
    console.error("Read failed with error in Z Report Request: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/GenerateZReport', async (req, res) => {
  try {
    const itemInfo = req.body;
    const queryToUse = `INSERT INTO z_reports (Date, Time, Sales)
    SELECT CURRENT_DATE, CURRENT_TIME, SUM(Total)
    FROM sales
    WHERE Date = CURRENT_DATE
    AND (CURRENT_DATE > (SELECT Date FROM z_reports ORDER BY ID DESC LIMIT 1)
         OR (CURRENT_DATE = (SELECT Date FROM z_reports ORDER BY ID DESC LIMIT 1)
             AND CURRENT_TIME > (SELECT Time FROM z_reports ORDER BY ID DESC LIMIT 1)));`
    console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    // console.table(rows);

  } catch (err) {
    console.error("Read failed with error in Z Report Request: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/excessReport/:start/:end', async (req, res) => {
  try {
    const start = req.params.start;
    const end = req.params.end;

    const [startyear, startmonth, startday] = start.split('-');
    const [endyear, endmonth, endday] = end.split('-');
    const formattedstart = `${startday}-${startmonth}-${startyear}`;
    formattedend = `${endday}-${endmonth}-${endyear}`;
    const queryToUse = `SELECT p.Product_Name, COUNT(o.Product_ID) AS Sales_Count
                        FROM Products p
                        LEFT JOIN Orders o ON p.ID = o.Product_ID
                        LEFT JOIN Sales s ON o.Sale_ID = s.ID
                        WHERE s.Date BETWEEN '${formattedstart}' AND '${formattedend}'
                        GROUP BY p.Product_Name
                        HAVING COUNT(o.Product_ID) < 5;`

    console.log(queryToUse);
    // const { rows } = await pool.query(queryToUse, queryValues);
    // res.json(rows);

  } catch (err) {
    //console.log("error!");
    console.error("Read failed with error in excessRequest: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/restockReport', async (req, res) => {
  try {
    const queryToUse = `SELECT * FROM inventory WHERE item_quantity <= 50;`;
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);

  } catch (err) {
    console.error("Read failed with error in Restock Request: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/soldTogether/:start/:end', async (req, res) => {
  try {
    var popularCombos = [];
    var queryToUse;
    var initialDateString = req.params.start;
    var finalDateString = req.params.end;
    queryToUse = 'SELECT m1.MENU_ITEM_NAME AS MENU_ITEM_NAME_1, m2.MENU_ITEM_NAME AS MENU_ITEM_NAME_2, COUNT(*) AS combo_count ' +
                    'FROM item_sold s1 JOIN item_sold s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.MENU_ITEM_ID < s2.MENU_ITEM_ID ' +
                    'JOIN Menu m1 ON s1.MENU_ITEM_ID = m1.MENU_ITEM_ID JOIN Menu m2 ON s2.MENU_ITEM_ID = m2.MENU_ITEM_ID ' +
                    'WHERE s1.ORDER_ID IN (SELECT ORDER_ID FROM orders WHERE DATE_ORDERED BETWEEN $1 AND $2 ) ' +
                    'GROUP BY m1.MENU_ITEM_NAME, m2.MENU_ITEM_NAME ORDER BY combo_count DESC';
    var queryValues = [initialDateString, finalDateString];
    console.log(queryToUse, queryValues);
    var i = 1;
    const { rows } = await pool.query(queryToUse, queryValues);
    for (let row of rows) {
      //console.log(row);
      const menuItem1 = row.menu_item_name_1;
      const menuItem2 = row.menu_item_name_2;
      const comboCount = row.combo_count;
      //console.log(row.MENU_ITEM_NAME_1);
      //console.log(menuItem1);
      const combo = {ID: i, menuItem1: menuItem1, menuItem2: menuItem2, comboCount: comboCount};
      i++;
      if(menuItem1 != "Burger/Sandwich Combo" && menuItem1 != "Basket Combo" && menuItem1 != "Silverware" && menuItem2 != "Burger/Sandwich Combo" && menuItem2 != "Basket Combo" && menuItem2 != "Silverware")
        popularCombos.push(combo);
    }
    res.json(popularCombos);
    //console.log(popularCombos);

  } catch (err) {
    console.error("Read failed with error in soldTogetherRequest: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/add-sales', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse =  `INSERT INTO sales (date, time, employee_id, customer_id, total) VALUES ('${itemInfo.date}', '${itemInfo.time}', '${itemInfo.employeeid}', '${itemInfo.customerid}', '${itemInfo.total}');`
    console.log(queryToUse)
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/update-inventory', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse =  `UPDATE inventory SET item_quantity = item_quantity - 1 WHERE id IN (10001, 10002, 10003);`
    console.log(queryToUse)
    const result = await pool.query(queryToUse);
    res.json({ message: 'Inventory added successfully' });
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/restockRequest', async (req, res) => {
  try {
    var queryToUse;
    queryToUse = 'SELECT * FROM inventory_item WHERE inventory_item_quantity <= 50';
    // console.log(queryToUse);
    const { rows } = await pool.query(queryToUse);
    res.json(rows);
    //console.log(rows);

  } catch (err) {
    console.error("Read failed with error in Restock Request: " + err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3001, () => {
  console.log('Server listening on port 5000');
});