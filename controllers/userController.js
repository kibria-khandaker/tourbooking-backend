import User from '../models/User.js';

// create new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json({ success: true, message: "Successfully Created", data: savedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Created , Try again" });
    }
}

// update User
export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to updated , Try again" });
    }
};

// delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete , Try again" });
    }
};

// getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);

        res.status(200).json({ success: true, message: "Successfully Get", data: user });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found data , Try again" });
    }
};

// getAll User
export const getAllUser = async (req, res) => {

    // for pagination 
    // const page = parseInt(req.query.page);

    // console.log(page);    

    try {
        const users = await User.find({})
            // .skip(page * 8)
            // .limit(8);

        res.status(200).json({ success: true, message: "Successfully get all Users items", data: users });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found data , Try again" });
    }
};



// get User by search
export const getUserBySearch = async (req, res) => {

    // here i for case sensitive
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        // $gte means greater the equal
        const Users = await User.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize },
        });

        res.status(200).json({ success: true, message: "Successful", data: Users });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found data" });
    }

}

// get featured User
export const getFeaturedUser = async (req, res) => {

    try {
        const Users = await User.find({ featured: true }).limit(8);

        res.status(200).json({ success: true, message: "Successfully get featured Users", data: Users });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found data" });
    }
};

// get all User count number
export const getUserCount = async (req, res) => {

    try {
        const UserCount = await User.estimatedDocumentCount();

        res.status(200).json({ success: true, data: UserCount });
    } catch (err) {
        res.status(404).json({ success: false, message: "failed to fetch" });
    }
};
