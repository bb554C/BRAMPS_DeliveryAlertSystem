//Project Name: BRAMPS Food Automated Delivery System
//Code by Buenaventura, Baird Rouan S.
//Run on Memento Database Form. Javascript trigger after new entry on database

//Set variables
var e = entry();
var con = e.field("Contact");
var stat = e.field("Order Status");
var c = e.field("Name");
var subTotPrice = e.field("Sub Total");
var PWDDis = e.field("PWD Discount Amount");
var SeniorDisc = e.field("Senior Discount Amount");
var OtherDisc = e.field("Other Discount Amount");
var totPrice = e.field("Total");
var specInstrictions = e.field("Special Instructions")
var msg = "";
let itemList = new Array();
var header = "BRAMPS Food\n";
var orderListHeader = "\nITEM - PRICE - QTY = SubTotal";
var GCashDetails = "\nGCash Details\nRuth Suva - 0917 707 1668";
var orderList = "";
var discList = "";
var tmp = "";

//read and organize order list and concatenate into a string variable
tmp = e.field("Item 1 Name");
if(tmp != "" || tmp != null)
{
    orderList = orderList + "\n"
    + e.field("Item 1 Name") + " - ₱" 
    + e.field("Price 1") + " - " 
    + e.field("QTY 1") + " = ₱"
    + e.field("Price 1")*e.field("QTY 1");
}

//read and organize discounts and concatenate into a string variable
tmp = e.field("PWD Discount");
if(tmp == "Yes")
{
    discList = discList
    + "\nPWD Discount ₱" + PWDDis;
}
tmp = e.field("Senior Discount");
if(tmp == "Yes")
{
    discList = discList
    + "\nSenior Discount ₱ " + SeniorDisc;
}
tmp = e.field("Other Discount");
if(tmp == "Yes")
{
    discList = discList
    + "\nOther Discount ₱" + OtherDisc;
}

//Setting the SMS message body for each delivery status
if(stat == "Order Received")
{
    msg = header + "Your order has been received."
    + orderListHeader
    + orderList
    + "\nSubTotal = " + subTotPrice
    + "\n" + discList
    + "\nTotal Amount = ₱" + totPrice;
}
else if (stat == "Preparing Order")
{
    msg = header + "Your order is now being prepared."
    + orderListHeader
    + orderList
    + "\nSubTotal = " + subTotPrice
    + "\n" + discList
    + "\nTotal Amount Due = ₱" + totPrice;
}
else if(stat == "For Delivery")
{
    msg = header + "Your Order is out for delivery. If possible please prepare exact amount of ₱" 
    + totPrice + "."
    + GCashDetails;
}
else if(stat == "Delivered - Unpaid")
{
    msg = header + "Thank you po for your patronage! Your total is ₱" 
    + totPrice + "."
    + GCashDetails;
}


//Open Android SMS application with pre-filled message body
con.sendSMS(msg);