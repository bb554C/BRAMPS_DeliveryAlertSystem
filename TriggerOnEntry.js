//Project Name: BRAMPS Food Automated Delivery System
//Code by Buenaventura, Baird Rouan S.
//Run on Memento Database Form. Javascript trigger after new entry on database

//Set variables
var e = entry();
var con = e.field("Contact");
var stat = e.field("Order Status");
var c = e.field("Name");
var specInstrictions = e.field("Special Instructions")
var header = "BRAMPS Food\n";
var GCashDetails = "\nGCash Details\nRuth Suva - 0917 707 1668";

var msg = "";
var orderList = "";
var discList = "";

var subTotPrice = 0;
var Total = 0;
var Discount = 0;

//Compute for the subtotal
subTotPrice = (e.field("Price 1")*e.field("QTY 1"))
+ (e.field("Price 2")*e.field("QTY 2"))
+ (e.field("Price 3")*e.field("QTY 3"))
+ (e.field("Price 4")*e.field("QTY 4"))
+ (e.field("Price 5")*e.field("QTY 5"))
+ (e.field("Price 6")*e.field("QTY 6"))
+ (e.field("Price 7")*e.field("QTY 7"))
+ (e.field("Price 8")*e.field("QTY 8"))
+ (e.field("Price 9")*e.field("QTY 9"))
+ (e.field("Price 10")*e.field("QTY 10"));

//Compute for the total discounts
Discount = e.field("PWD Discount Amount") 
+ e.field("Senior Discount Amount") 
+ e.field("Other Discount Amount");

//Compute for Total Price
Total = subTotPrice - Discount;

//Set Subtotal field and Total field to new values
e.set("Sub Total",subTotPrice);
e.set("Total",Total)


//read and organize order list and concatenate into a string variable
if(stat == "Order Received" || stat == "Preparing Order")
{
    if(e.field("Item 1 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 1 Name") + " ~ ₱" 
        + e.field("Price 1") + " ~ " 
        + e.field("QTY 1") + " = ₱"
        + e.field("Price 1")*e.field("QTY 1");
    }
    if(e.field("Item 2 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 2 Name").length + " ~ ₱" 
        + e.field("Price 2") + " ~ " 
        + e.field("QTY 2") + " = ₱"
        + e.field("Price 2")*e.field("QTY 2");
    }
    if(e.field("Item 3 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 3 Name") + " ~ ₱" 
        + e.field("Price 3") + " ~ " 
        + e.field("QTY 3") + " = ₱"
        + e.field("Price 3")*e.field("QTY 3");
    }
    if(e.field("Item 4 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 4 Name") + " ~ ₱" 
        + e.field("Price 4") + " ~ " 
        + e.field("QTY 4") + " = ₱"
        + e.field("Price 4")*e.field("QTY 4");
    }
    if(e.field("Item 5 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 5 Name") + " ~ ₱" 
        + e.field("Price 5") + " ~ " 
        + e.field("QTY 5") + " = ₱"
        + e.field("Price 5")*e.field("QTY 5");
    }
    if(e.field("Item 6 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 6 Name") + " ~ ₱" 
        + e.field("Price 6") + " ~ " 
        + e.field("QTY 6") + " = ₱"
        + e.field("Price 6")*e.field("QTY 6");
    }
    if(e.field("Item 7 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 7 Name") + " ~ ₱" 
        + e.field("Price 7") + " ~ " 
        + e.field("QTY 7") + " = ₱"
        + e.field("Price 7")*e.field("QTY 7");
    }
    if(e.field("Item 8 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 8 Name") + " ~ ₱" 
        + e.field("Price 8") + " ~ " 
        + e.field("QTY 8") + " = ₱"
        + e.field("Price 8")*e.field("QTY 8");
    }
    if(e.field("Item 9 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 9 Name") + " ~ ₱" 
        + e.field("Price 9") + " ~ " 
        + e.field("QTY 9") + " = ₱"
        + e.field("Price 9")*e.field("QTY 9");
    }
    if(e.field("Item 10 Name").length != 0)
    {
        orderList = orderList + "\n"
        + e.field("Item 10 Name") + " ~ ₱" 
        + e.field("Price 10") + " ~ " 
        + e.field("QTY 10") + " = ₱"
        + e.field("Price 10")*e.field("QTY 10");
    }
}

//read and organize discounts and concatenate into a string variable
if(e.field("PWD Discount") == "Yes")
{
    discList = discList
    + "\nPWD -₱" + e.field("PWD Discount Amount");
}
if(e.field("Senior Discount") == "Yes")
{
    discList = discList
    + "\nSenior -₱ " + e.field("Senior Discount Amount");
}
if(e.field("Other Discount") == "Yes")
{
    discList = discList
    + "\nOther -₱" + e.field("Other Discount Amount");
}

//Setting the SMS message body for each delivery status
if(stat == "Order Received")
{
    msg = header + "Your order has been received."
    + orderList
    + "\n\n" + specInstrictions
    + "\n\nSubTotal = " + subTotPrice
    + "\n" + discList
    + "\nTotal = ₱" + Total;
}
else if (stat == "Preparing Order")
{
    msg = header + "Your order is now being prepared."
    + orderList
    + "\n\n" + specInstrictions
    + "\n\nSubTotal = " + subTotPrice
    + "\n\n" + discList
    + "\n\nTotal = ₱" + Total;
}
else if(stat == "For Delivery")
{
    msg = header + "Your Order is out for delivery. If possible please prepare exact amount of ₱" 
    + Total + "."
    + GCashDetails;
}
else if(stat == "Delivered - Unpaid")
{
    msg = header + "Thank you po for your patronage! Your total is ₱" 
    + Total + "."
    + GCashDetails;
}

//Open Android SMS application with pre-filled message body
con.sendSMS(msg);