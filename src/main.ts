import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("1", "John");

const address = new Address("Street 1", "123", "123456", "City");

customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "1", "Item 1", 10, 2);
const item2 = new OrderItem("2", "1", "Item 2", 20, 2);
const item3 = new OrderItem("3", "1", "Item 3", 30, 2);

const order = new Order("1", "1", [item1, item2, item3]);

console.log(order.total());
