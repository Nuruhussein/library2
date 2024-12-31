import React from "react";
import { useForm } from "@inertiajs/react";

const CreateBookForm = ({ authors, categories }) => {
    const { data, setData, post, errors } = useForm({
        title: "",
        author_id: "",
        category_id: "",
        description: "",
        isbn: "",
        publication_date: "",
        cover_image: null,
        comment: "", // For review comment
        reviewer: "", // For reviewer's name
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/books");
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Book Information Section */}
            <h2>Book Information</h2>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />
                {errors.title && <span>{errors.title}</span>}
            </div>
            <div>
                <label>Author</label>
                <select
                    value={data.author_id}
                    onChange={(e) => setData("author_id", e.target.value)}
                    required
                >
                    <option value="">Select Author</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
                {errors.author_id && <span>{errors.author_id}</span>}
            </div>
            <div>
                <label>Category</label>
                <select
                    value={data.category_id}
                    onChange={(e) => setData("category_id", e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.category_id && <span>{errors.category_id}</span>}
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                {errors.description && <span>{errors.description}</span>}
            </div>
            <div>
                <label>ISBN</label>
                <input
                    type="text"
                    value={data.isbn}
                    onChange={(e) => setData("isbn", e.target.value)}
                />
                {errors.isbn && <span>{errors.isbn}</span>}
            </div>
            <div>
                <label>Publication Date</label>
                <input
                    type="date"
                    value={data.publication_date}
                    onChange={(e) =>
                        setData("publication_date", e.target.value)
                    }
                />
                {errors.publication_date && (
                    <span>{errors.publication_date}</span>
                )}
            </div>
            <div>
                <label>Cover Image</label>
                <input
                    type="file"
                    onChange={(e) => setData("cover_image", e.target.files[0])}
                />
                {errors.cover_image && <span>{errors.cover_image}</span>}
            </div>

            {/* Review Section */}
            <h2>Add Review</h2>
            <div>
                <label>Comment</label>
                <textarea
                    value={data.comment}
                    onChange={(e) => setData("comment", e.target.value)}
                />
                {errors.comment && <span>{errors.comment}</span>}
            </div>
            <div>
                <label>Reviewer</label>
                <input
                    type="text"
                    value={data.reviewer}
                    onChange={(e) => setData("reviewer", e.target.value)}
                />
                {errors.reviewer && <span>{errors.reviewer}</span>}
            </div>

            <button type="submit">Add Book and Review</button>
        </form>
    );
};

export default CreateBookForm;
