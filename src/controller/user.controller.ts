import { User } from "../models/user.model";

export class UserController {
    public async getAllUsers() {
        return await User.findAll();
    }
    public async getUserById(id: number) {
        return await User.findOne({
            where: {
                id
            }
        });
    }
    public async createUser(user: User) {
        try {
            const newUser = new User(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );
            console.log(newUser);
            
            const result = await newUser.save();
            console.log(result);
            return result
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    public async updateUser(id: number, user: User) {
      try {
        return await User.update({
            name: user.name,
            email: user.email,
            password: user.password,
            updatedAt: new Date()
        }, {
            where: {
                id
            }
        });
      } catch (error) {
        console.log(error);
        return false;
        
      }
    }
    public async deleteUser(id: number) {
        return await User.destroy({
            where: {
                id
            }
        });
    }
}