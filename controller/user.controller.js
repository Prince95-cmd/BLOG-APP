const userInstance = require('../services/user.service');

const createUser = async (req, res) => {
    try {
        const userInfo = req.body;
        const createdUser = await userInstance.createUser(userInfo);
        res.status(201).json(createdUser);
    } catch (err) {
        throw new Error(err);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userInstance.findAllUsers();
        res.json(allUsers);
    } catch (err) {
        throw new Error(err);
    }
};

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const oneUser = await userInstance.findOneUser(id);
        res.json(oneUser);
    } catch (err) {
        throw new Error(err);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userInfo = req.body;
        const updatedUser = await userInstance.updateUser(id, userInfo);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        throw new Error(err);;
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userInstance.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = { createUser, getAllUsers, getOneUser, updateUser, deleteUser };
