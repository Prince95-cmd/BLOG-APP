const userModel = require('../schema/user.schema');

class UserService {

    async createUser(userInfo) {
        try {
            const newUser = new userModel(userInfo);
            const savedUser = await newUser.save();
            return savedUser;
        } catch (err) {
            throw new Error(`Error creating user: ${err.message}`);
        }
    }

    async findAllUsers() {
        try {
            const allUsers = await userModel.find({});
            return allUsers;
        } catch (err) {
            throw new Error(`Error finding all users: ${err.message}`);
        }
    }

    async findOneUser(email) {
        try {
            const user = await userModel.findOne({ email: email });
            return user;
        } catch (err) {
            throw new Error(`Error finding user with email ${email}: ${err.message}`);
        }
    }

    async updateUser(email, userInfo) {
        try {
            const updatedUser = await userModel.findOneAndUpdate({ email: email }, userInfo, { new: true });
            return updatedUser;
        } catch (err) {
            throw new Error(`Error updating user with email ${email}: ${err.message}`);
        }
    }

    async deleteUser(email) {
        try {
            const deletedUser = await userModel.findOneAndDelete({ email: email });
            return deletedUser;
        } catch (err) {
            throw new Error(`Error deleting user with email ${email}: ${err.message}`);
        }
    }
};

const userInstance = new UserService();

module.exports = userInstance;
