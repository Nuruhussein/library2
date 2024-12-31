import React from "react";
import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/categories");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                {errors.description && <p>{errors.description}</p>}
            </div>
            <button type="submit">Add Category</button>
        </form>
    );
};

export default Create;
