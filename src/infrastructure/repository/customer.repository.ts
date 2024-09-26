import Customer from "../../domain/entity/customer";
import RepositoryInterface from "../../domain/repository/repository.interface";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository
  implements RepositoryInterface<Customer>
{
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.Address.street,
      number: entity.Address.number,
      zipcode: entity.Address.zipcode,
      city: entity.Address.city,
    });
  }
  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: entity.name,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }
  async find(id: string): Promise<Customer> {
    const customerModel = await CustomerModel.findOne({ where: { id } });
    return new Customer(customerModel.id, customerModel.name);
  }
  async findAll(): Promise<Customer[]> {
    const customerModels = await CustomerModel.findAll();
    return customerModels.map((productModel) => {
      return new Customer(productModel.id, productModel.name);
    });
  }
}
