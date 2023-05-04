import { useState, useEffect } from 'react';


/* Fetch menu items from list to display in table */
function GetCurrentInventoryList(start, end){
  return new Promise((resolve, reject) => {
    async function fetchInventoryItems() {
      const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const data = await response.json();
      resolve(data);
    }
    fetchInventoryItems().catch(reject);
  });
}
function GetInventoryList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);

      const response = await fetch(`http://localhost:3001/queryInventory/0/0`);
      const data = await response.json();
      setInventoryItems(data);
    }
    fetchInventoryItems();
  }, [start, end]);
  return inventoryItems;
}
function GetProductsList(start, end){
  const [productsItems, setproducstItems] = useState([]);

  useEffect(() => {

      async function fetchproductsItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryProducts/0/0`);

      const data = await response.json();
      setproducstItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchproductsItems();
  }, [start, end]);

  return productsItems;
}

function GetCustomizationsList(start, end){
  const [customizationsItems, setcustomizationsItems] = useState([]);

  useEffect(() => {

      async function fetchcustomizationsItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryCustomizations/0/0`);

      const data = await response.json();
      setcustomizationsItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchcustomizationsItems();
  }, [start, end]);

  return customizationsItems;
}

function GetSalesList(start, end){
  const [salesItems, setsalesItems] = useState([]);

  useEffect(() => {

      async function fetchsalesItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/querySales/0/0`);

      const data = await response.json();
      setsalesItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchsalesItems();
  }, [start, end]);

  return salesItems;
}
function GetOrdersList(start, end){
  const [ordersItems, setordersItems] = useState([]);

  useEffect(() => {

      async function fetchordersItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryOrders/0/0`);

      const data = await response.json();
      setordersItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchordersItems();
  }, [start, end]);

  return ordersItems;
}
function GetEmployeesList(start, end){
  const [employeesItems, setemployeesItems] = useState([]);

  useEffect(() => {

      async function fetchemployeesItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryEmployees/0/0`);

      const data = await response.json();
      setemployeesItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchemployeesItems();
  }, [start, end]);

  return employeesItems;
}

function GetCustomersList(start, end){
  const [customersItems, setcustomersItems] = useState([]);

  useEffect(() => {

      async function fetchcustomersItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryCustomers/0/0`);

      const data = await response.json();
      setcustomersItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchcustomersItems();
  }, [start, end]);

  return customersItems;
}
function GetRecipesList(start, end){
  const [recipeItems, setrecipeItems] = useState([]);

  useEffect(() => {

      async function fetchrecipeItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryRecipes/0/0`);

      const data = await response.json();
      setrecipeItems(data);
      // console.log("queried")

    }
    // console.log("useEffect")
    fetchrecipeItems();
  }, [start, end]);

  return recipeItems;
}
function GetSizesList(start, end){
  const [SizeItems, setSizeItems] = useState([]);

  useEffect(() => {

      async function fetchSizeItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/querySizes/0/0`);

      const data = await response.json();
      setSizeItems(data);
      // console.log("queried")

    }
    // console.log("useEffect") 
    fetchSizeItems();
  }, [start, end]);

  return SizeItems;
}
function AddtoInventory(info) {
  // const [message, setMessage] = useState("");

  async function handleSubmit() {
    console.log(info[0])
    const response = await fetch(`http://localhost:3001/add-item`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id : info[0],
        name: info[1],
        type: info[2],
        quantity: info[3],
        unit: info[4],
        price: info[5],
        date: info[6]
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}
function AddtoProducts(info) {
  async function handleSubmit() {
    // console.log(info[0])
    const response = await fetch(`http://localhost:3001/add-product`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id : info[0],
        name: info[1],
        type: info[2],
        price: info[3],
        description: info[4],
        date: info[5]
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}
function AddtoEmployees(info) {

  async function handleSubmit() {
    // console.log(info[0])
    const response = await fetch(`http://localhost:3001/add-employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id : info[0],
        name: info[1],
        position: info[2],
        phone: info[3],
        date: info[4]
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}
function AddtoCustomers(info) {
  // const [message, setMessage] = useState("");

  async function handleSubmit() {
    console.log(info[0])
    const response = await fetch(`http://localhost:3001/add-customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id : info[0],
        name: info[1],
        phone : info[2],
        date: info[3]
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}
function AddtoRecipes(info) {
  async function handleSubmit() {
    // console.log(info[0])
    const response = await fetch(`http://localhost:3001/add-recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        p_id : info[0],
        i_id: info[1],
        i_item: info[2],
        quantity: info[3],
        unit: info[4],
        date: info[5]
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}

function AddtoSales(info) {
  // const [message, setMessage] = useState("");

  async function handleSubmit() {
    console.log(info[0])
    const response = await fetch(`http://localhost:3001/add-sales`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id : info[0],
        date: info[1],
        time : info[2],
        employeeid : info[3],
        customerid : info[4], 
        total : info[5]
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}

function SalesReport(start, end){
  return new Promise((resolve, reject) => {
    async function fetchInventoryItems() {
      const response = await fetch(`http://localhost:3001//manager/salesReport/${start}/${end}`);
      const data = await response.json();
      resolve(data);
    }
    fetchInventoryItems().catch(reject);
  });
}

function UpdateInventory(info) {
  // const [message, setMessage] = useState("");

  async function handleSubmit() {
    console.log(info[0])
    const response = await fetch(`http://localhost:3001/update-inventory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      })
    });
    const data = await response.json();
    console.log(data.message);
  }
  handleSubmit()
}


export {GetInventoryList, GetCurrentInventoryList, GetProductsList, GetCustomizationsList, GetSalesList, GetOrdersList, GetEmployeesList
  , GetCustomersList, GetRecipesList, GetSizesList, AddtoInventory, AddtoCustomers, AddtoEmployees, AddtoProducts,
  AddtoRecipes, SalesReport, AddtoSales, UpdateInventory
};