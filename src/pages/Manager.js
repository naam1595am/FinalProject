import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import {GetInventoryList, GetCurrentInventoryList, GetProductsList, GetCustomizationsList, GetSalesList, GetOrdersList, GetEmployeesList
  , GetCustomersList, GetRecipesList, GetSizesList, AddtoInventory, AddtoCustomers, AddtoEmployees, AddtoProducts,
   AddtoRecipes, SalesReport} from '../backend/server_functions';

const Manager = () => {
  const [activeTab, setActiveTab] = useState(0); // Define the active tab state
  const [showInventoryForm, setShowInventoryForm] = useState(false);
  const [showProductsForm, setShowProductsForm] = useState(false);
  const [showEmployeesForm, setShowEmployeesForm] = useState(false);
  const [showCustomersForm, setShowCustomersForm] = useState(false);
  const [showRecipesForm, setShowRecipesForm] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);


  const starting_inventory = GetInventoryList(0, 0)
  const productData = GetProductsList(0,0);
  const customizationsData = GetCustomizationsList(0,0);
  const salesData = GetSalesList(0,0);
  const ordersData = GetOrdersList(0,0);
  const employeeData = GetEmployeesList(0,0);
  const customerData = GetCustomersList(0,0);
  const recipeData = GetRecipesList(0,0);
  const sizeData = GetSizesList(0,0);

  const [updatedInventory, setUpdatedInventory] = useState([])
  //fill in data for everything except transactions
  // edit function for inventory, products, employees, customers, recipes
  // x y z tables for the report
  const title = [
    { id: 0, name: 'Inventory', tableData: []
    },
    { id: 1, name: 'Transactions', tableData: [] },
    { id: 2, name: 'Products', tableData: [] },
    { id: 3, name: 'Customizations', tableData: [] },
    { id: 4, name: 'Sales', tableData: [] },
    { id: 5, name: 'Orders', tableData: [] },
    { id: 6, name: 'Employees', tableData: [] },
    { id: 7, name: 'Customers', tableData: [] },
    { id: 8, name: 'Recipes', tableData: [] },
    { id: 9, name: 'Sizes', tableData: [] },
    { id: 10, name: 'Reports', tableData: [] },
  ];

  // useEffect(() => {
  //   GetCurrentInventoryList(0, 0)
  //     .then(data => {
  //       setUpdatedInventory(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  let tabs = [
    { id: 0, name: 'Inventory', tableData: starting_inventory},
    { id: 1, name: 'Products', tableData: productData },
    { id: 2, name: 'Customizations', tableData: customizationsData },
    { id: 3, name: 'Sales', tableData: salesData },
    { id: 4, name: 'Orders', tableData: ordersData },
    { id: 5, name: 'Employees', tableData: employeeData },
    { id: 6, name: 'Customers', tableData: customerData },
    { id: 7, name: 'Recipes', tableData: recipeData },
    { id: 8, name: 'Sizes', tableData: sizeData },
    { id: 9, name: 'Reports', tableData: [
      {id: 0, name: 'Sales Report', reportData: []}, 
      {id: 1, name: 'X Report', reportData: []}, 
      {id: 2, name: 'Z Report', reportData: []}, 
      {id: 3, name: 'Excess Report', reportData: []}, 
      {id: 4, name: 'Restock Report', reportData: []}, 
      {id: 5, name: 'What Sells Together', reportData: []}, 
    ] },
  ];

  function handleInventorySubmit(event) {
    event.preventDefault();
    if(showInventoryForm){
      const itemID= event.target.elements.id.value;
      const itemName = event.target.elements.itemName.value;
      const itemType = event.target.elements.itemType.value;
      const itemQuantity = event.target.elements.itemQuantity.value;
      const itemUnit = event.target.elements.itemUnit.value;
      const itemPrice= event.target.elements.itemPrice.value;
      const DateOfLastUpdate= event.target.elements.DateOfLastUpdate.value;
      const info = [itemID, itemName, itemType, itemQuantity, itemUnit, itemPrice, DateOfLastUpdate]
      console.log("inventory")
      console.log(info)
      AddtoInventory(info)
      GetCurrentInventoryList(0, 0)
        .then(data => {
          tabs[0].tableData = data;

        })
        .catch(error => {
          console.error(error);
        });
      }
    setShowInventoryForm(!showInventoryForm);
  }
  function handleProductSubmit(event) {
    event.preventDefault();
    if(showProductsForm){
      const productID = event.target.elements.id.value;
      const productName = event.target.elements.productName.value;
      const productType = event.target.elements.productType.value;
      const productPrice= event.target.elements.productPrice.value;
      const productDescription = event.target.elements.productDescription.value;
      const DateOfLastUpdate= event.target.elements.DateOfLastUpdate.value;
      const info = [productID, productName,productType, productPrice, productDescription, DateOfLastUpdate]
      console.log("product")

      // console.log(info)
      AddtoProducts(info)
    }
    setShowProductsForm(!showProductsForm);
  }
  function handleEmployeeSubmit(event) {
    event.preventDefault();
    if(showEmployeesForm){
      const employeeID = event.target.elements.id.value;
      const employeeName = event.target.elements.employeeName.value;
      const employeePosition = event.target.elements.employeePosition.value;
      const employeePhone = event.target.elements.employeePhone.value;
      const DateOfLastUpdate = event.target.elements.DateOfLastUpdate.value;
      const info = [employeeID, employeeName, employeePosition, employeePhone, DateOfLastUpdate]
      // console.log("employees")
      // console.log(info)
      AddtoEmployees(info);
    }
    setShowEmployeesForm(!showEmployeesForm);
  }
  function handleCustomerSubmit(event) {
    event.preventDefault();
    if(showCustomersForm){
    const customerID = event.target.elements.id.value;
    const customerName = event.target.elements.customerName.value;
    const customerPhone = event.target.elements.customerPhone.value;
    const DateOfLastUpdate = event.target.elements.DateOfLastUpdate.value;
    const info = [customerID, customerName, customerPhone, DateOfLastUpdate];
    console.log("customer")

    console.log(info)
    AddtoCustomers(info)
    }
    setShowCustomersForm(!showCustomersForm);
  }
  function handleRecipesSubmit(event) {
    event.preventDefault();
    if(showRecipesForm){
      const product_id = event.target.elements.product_id.value;
      const inventory_id = event.target.elements.inventory_id.value;
      const inventory_item = event.target.elements.inventory_item.value;
      const quantity = event.target.elements.quantity.value;
      const unit = event.target.elements.unit.value;
      const DateOfLastUpdate = event.target.elements.DateOfLastUpdate.value;
      const info = [product_id, inventory_id, inventory_item, quantity, unit, DateOfLastUpdate]
      console.log("recipes")

      // console.log(info)
      AddtoRecipes(info)
    }
    setShowRecipesForm(!showRecipesForm);
  }
  function handleReportSubmit(event) {
    event.preventDefault();
    if(showReportForm){
      const start = event.target.elements.start.value;
      const end = event.target.elements.end.value;
      const info = [start, end]
      console.log("report")
      // console.log(info)
      SalesReport(info)
      .then(data => {
        tabs[0].tableData = data;

      })
      .catch(error => {
        console.error(error);
      });
    }
    setShowReportForm(!showReportForm);
  }
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); // Update the active tab state when a tab is clicked
  };
  return (
      
    <div>
      <div
        style={{
          backgroundColor: '#1e3932',
          height: '100px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:-1,
        }}
      >
      <img src={require('./logo.png')} alt="Logo" style={{ width: '5%' }} />
      </div>
      <div style={{ marginTop: '150px', marginLeft: '300px'}}>
        <div style={{ display: 'flex' }}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={{
                backgroundColor: activeTab === tab.id ? '#1e3932' : '#00754a',
                color: 'white',
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div>
          {tabs.map((tab) => (
            <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
              <table>
                <thead>
                  <tr>
                    {tab.tableData.length > 0 && Object.keys(tab.tableData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tab.tableData.map((data) => (
                      <tr key={data.id}>
                          {Object.keys(data).map((key) => (
                              <td key={key}>{data[key]}</td>
                          ))}
                      </tr>
                      
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <div
      >
      </div>
      <div >
        {activeTab === 0 ? <div>
        {showInventoryForm ? (
          <div>
            <form onSubmit={handleInventorySubmit}>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" />

              <label htmlFor="itemName">Item Name:</label>
              <input type="text" id="itemName" name="itemName" />

              <label htmlFor="itemType">Item Type:</label>
              <input type="text" id="itemType" name="itemType" />

              <label htmlFor="itemQuantity">Item Quantity:</label>
              <input type="text" id="itemQuantity" name="itemQuantity" />

              <label htmlFor="itemUnit">Item Unit:</label>
              <input type="text" id="itemUnit" name="itemUnit" />

              <label htmlFor="itemPrice">Item Price:</label>
              <input type="text" id="itemPrice" name="itemPrice" />

              <label htmlFor="dateOfLastUpdate">Date of Last Update:</label>
              <input type="text" id="DateOfLastUpdate" name="dateOfLastUpdate" />

              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div>
              <button onClick={handleInventorySubmit}>Add Item</button>
          </div>
        )}
    </div> : null}
        {activeTab === 1 ? <div>
            {showProductsForm ? (
              <div>
                <form onSubmit="handleProductSubmit(); window.location.reload(); return false;">
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" />

                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" />

                <label htmlFor="productType">Product Type:</label>
                <input type="text" id="productType" name="productType" />

                <label htmlFor="productPrice">Product Price:</label>
                <input type="text" id="productPrice" name="productPrice" />

                <label htmlFor="productDescription">Product Description:</label>
                <input type="text" id="productDescription" name="productDescription" />
                
                <label htmlFor="dateOfLastUpdate">Date of Last Update:</label>
                <input type="text" id="DateOfLastUpdate" name="DateOfLastUpdate" />

                <button type="submit">Submit</button>
              </form>
              </div>
            ) : (
              <div>
                  <button onClick={handleProductSubmit}>Add Product</button>
              </div>
            )}
        </div> : null}
        {activeTab === 5 ? <div>
          {showEmployeesForm ? (
            <div>
              <form onSubmit={handleEmployeeSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" />
                <label htmlFor="employeeName">Employee Name:</label>
                <input type="text" id="employeeName" name="employeeName" />

                <label htmlFor="employeePosition">Employee Position:</label>
                <input type="text" id="employeePosition" name="employeePosition" />

                <label htmlFor="employeePhone">Employee Phone:</label>
                <input type="text" id="employeePhone" name="employeePhone" />

                <label htmlFor="DateOfLastUpdate">Date of Last Update:</label>
                <input type="text" id="DateOfLastUpdate" name="DateOfLastUpdate" />

                <button type="submit">Submit</button>
                </form>
                </div>
                ) : (
                <div>
                    <button onClick={handleEmployeeSubmit}>Add Employee</button>
                </div>
            )}
        </div> : null}
        {activeTab === 6 ? <div>
          {showCustomersForm ? (
            <div>
              <form onSubmit={handleCustomerSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" />
                
                <label htmlFor="customerName">Customer Name:</label>
                <input type="text" id="customerName" name="customerName" />

                <label htmlFor="customerPhone">Customer Phone:</label>
                <input type="text" id="customerPhone" name="customerPhone" />

                <label htmlFor="DateOfLastUpdate">Date of Last Update:</label>
                <input type="text" id="DateOfLastUpdate" name="DateOfLastUpdate" />

                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            <div>
              <button onClick={handleCustomerSubmit}>Add Customer</button>
            </div>
          )}
        </div> : null}
        {activeTab === 7 ? <div>{showRecipesForm ? (
            <div>
                <form onSubmit={handleRecipesSubmit}>
                <label htmlFor="product_id">Product ID:</label>
                <input type="text" id="product_id" name="product_id" />

                <label htmlFor="inventory_id">Inventory ID:</label>
                <input type="text" id="inventory_id" name="inventory_id" />

                <label htmlFor="inventory_item">Inventory Item:</label>
                <input type="text" id="inventory_item" name="inventory_item" />

                <label htmlFor="quantity">Quantity:</label>
                <input type="text" id="quantity" name="quantity" />

                <label htmlFor="unit">Unit:</label>
                <input type="text" id="unit" name="unit" />

                <label htmlFor="DateOfLastUpdate">Date of Last Update:</label>
                <input type="text" id="DateOfLastUpdate" name="DateOfLastUpdate" />
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            <div>
              <button onClick={handleRecipesSubmit}>Add Recipes</button>
            </div>
          )}
          </div> : null}
          {activeTab === 9 ? <div>
            <div>
                <form onSubmit={handleRecipesSubmit}>
                <label htmlFor="start">Start</label>
                <input type="text" id="start" name="start" />

                <label htmlFor="end">End</label>
                <input type="text" id="end" name="end" />
                <button type="submit">Generate Sales</button>
              </form>
              </div>
              <div>
              <button onClick={handleReportSubmit}>What Sells Together</button>
            </div>
          </div> : null}
      </div>
      
    </div>
    
    )
    
  }

export default Manager;
