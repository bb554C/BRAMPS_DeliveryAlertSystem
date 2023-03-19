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

var header = "BRAMPS Food\n";
var orderListHeader = "\n\nITEM - PRICE - QTY = SubTotal";
var GCashDetails = "\nGCash Details\nRuth Suva - 0917 707 1668";

var msg = "";
var orderList = "";
var discList = "";
var tmp = "";

//read and organize order list and concatenate into a string variable
if(stat == "Order Received" || stat == "Preparing Order")
{
    tmp = e.field("Item 1 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 1 Name") + " - ₱" 
        + e.field("Price 1") + " - " 
        + e.field("QTY 1") + " = ₱"
        + e.field("Price 1")*e.field("QTY 1");
    }
    tmp = e.field("Item 2 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 2 Name") + " - ₱" 
        + e.field("Price 2") + " - " 
        + e.field("QTY 2") + " = ₱"
        + e.field("Price 2")*e.field("QTY 2");
    }
    tmp = e.field("Item 3 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 3 Name") + " - ₱" 
        + e.field("Price 3") + " - " 
        + e.field("QTY 3") + " = ₱"
        + e.field("Price 3")*e.field("QTY 3");
    }
    tmp = e.field("Item 4 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 4 Name") + " - ₱" 
        + e.field("Price 4") + " - " 
        + e.field("QTY 4") + " = ₱"
        + e.field("Price 4")*e.field("QTY 4");
    }
    tmp = e.field("Item 5 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 5 Name") + " - ₱" 
        + e.field("Price 5") + " - " 
        + e.field("QTY 5") + " = ₱"
        + e.field("Price 5")*e.field("QTY 5");
    }
    tmp = e.field("Item 6 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 6 Name") + " - ₱" 
        + e.field("Price 6") + " - " 
        + e.field("QTY 6") + " = ₱"
        + e.field("Price 6")*e.field("QTY 6");
    }
    tmp = e.field("Item 7 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 7 Name") + " - ₱" 
        + e.field("Price 7") + " - " 
        + e.field("QTY 7") + " = ₱"
        + e.field("Price 7")*e.field("QTY 7");
    }
    tmp = e.field("Item 8 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 8 Name") + " - ₱" 
        + e.field("Price 8") + " - " 
        + e.field("QTY 8") + " = ₱"
        + e.field("Price 8")*e.field("QTY 8");
    }
    tmp = e.field("Item 9 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 9 Name") + " - ₱" 
        + e.field("Price 9") + " - " 
        + e.field("QTY 9") + " = ₱"
        + e.field("Price 9")*e.field("QTY 9");
    }
    tmp = e.field("Item 10 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 10 Name") + " - ₱" 
        + e.field("Price 10") + " - " 
        + e.field("QTY 10") + " = ₱"
        + e.field("Price 10")*e.field("QTY 10");
    }
    tmp = e.field("Item 11 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 11 Name") + " - ₱" 
        + e.field("Price 11") + " - " 
        + e.field("QTY 11") + " = ₱"
        + e.field("Price 11")*e.field("QTY 11");
    }
    tmp = e.field("Item 12 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 12 Name") + " - ₱" 
        + e.field("Price 12") + " - " 
        + e.field("QTY 12") + " = ₱"
        + e.field("Price 12")*e.field("QTY 12");
    }
    tmp = e.field("Item 13 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 13 Name") + " - ₱" 
        + e.field("Price 13") + " - " 
        + e.field("QTY 13") + " = ₱"
        + e.field("Price 13")*e.field("QTY 13");
    }
    tmp = e.field("Item 14 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 14 Name") + " - ₱" 
        + e.field("Price 14") + " - " 
        + e.field("QTY 14") + " = ₱"
        + e.field("Price 14")*e.field("QTY 14");
    }
    tmp = e.field("Item 15 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 15 Name") + " - ₱" 
        + e.field("Price 15") + " - " 
        + e.field("QTY 15") + " = ₱"
        + e.field("Price 15")*e.field("QTY 15");
    }
    tmp = e.field("Item 16 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 16 Name") + " - ₱" 
        + e.field("Price 16") + " - " 
        + e.field("QTY 16") + " = ₱"
        + e.field("Price 16")*e.field("QTY 16");
    }
    tmp = e.field("Item 17 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 17 Name") + " - ₱" 
        + e.field("Price 17") + " - " 
        + e.field("QTY 17") + " = ₱"
        + e.field("Price 17")*e.field("QTY 17");
    }
    tmp = e.field("Item 18 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 18 Name") + " - ₱" 
        + e.field("Price 18") + " - " 
        + e.field("QTY 18") + " = ₱"
        + e.field("Price 18")*e.field("QTY 18");
    }
    tmp = e.field("Item 19 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 19 Name") + " - ₱" 
        + e.field("Price 19") + " - " 
        + e.field("QTY 19") + " = ₱"
        + e.field("Price 19")*e.field("QTY 19");
    }
    tmp = e.field("Item 20 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 20 Name") + " - ₱" 
        + e.field("Price 20") + " - " 
        + e.field("QTY 20") + " = ₱"
        + e.field("Price 20")*e.field("QTY 20");
    }
    tmp = e.field("Item 21 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 21 Name") + " - ₱" 
        + e.field("Price 21") + " - " 
        + e.field("QTY 21") + " = ₱"
        + e.field("Price 21")*e.field("QTY 21");
    }
    tmp = e.field("Item 22 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 22 Name") + " - ₱" 
        + e.field("Price 22") + " - " 
        + e.field("QTY 22") + " = ₱"
        + e.field("Price 22")*e.field("QTY 22");
    }
    tmp = e.field("Item 23 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 23 Name") + " - ₱" 
        + e.field("Price 23") + " - " 
        + e.field("QTY 23") + " = ₱"
        + e.field("Price 23")*e.field("QTY 23");
    }
    tmp = e.field("Item 24 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 24 Name") + " - ₱" 
        + e.field("Price 24") + " - " 
        + e.field("QTY 24") + " = ₱"
        + e.field("Price 24")*e.field("QTY 24");
    }
    tmp = e.field("Item 25 Name");
    if(tmp != "" || tmp != null)
    {
        orderList = orderList + "\n"
        + e.field("Item 25 Name") + " - ₱" 
        + e.field("Price 25") + " - " 
        + e.field("QTY 25") + " = ₱"
        + e.field("Price 25")*e.field("QTY 25");
    }
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
    + "\n\n" + specInstrictions
    + "\n\nSubTotal = " + subTotPrice
    + "\n\n" + discList
    + "\n\nTotal Amount Due = ₱" + totPrice;
}
else if (stat == "Preparing Order")
{
    msg = header + "Your order is now being prepared."
    + orderListHeader
    + orderList
    + "\n\n" + specInstrictions
    + "\n\nSubTotal = " + subTotPrice
    + "\n\n" + discList
    + "\n\nTotal Amount Due = ₱" + totPrice;
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