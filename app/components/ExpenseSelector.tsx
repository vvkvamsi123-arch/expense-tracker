"use client";

import React, { useState } from "react";

type Category = "Stationery" | "Food" | "Transport";

const SubcategoryMap: Record<Category, string[]> = {
    Stationery: ["Pens", "Books", "Printer Paper"],
    Food: ["Groceries", "Dining Out", "Snacks"],
    Transport: ["Fuel", "Public Transit", "Parking"],
};

const ExpenseSelector = () => {
    const [category, setCategory] = useState<Category | "">("");
    const [subcategory, setSubcategory] = useState<string>("");

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>Select Expense Details</h3>

            <select
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value as Category);
                    setSubcategory("");
                }}
            >
                <option value="">Select a Category</option>
                <option value="Stationery">Stationery</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
            </select>

            <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                disabled={!category}
                style={{ marginLeft: "10px" }}
            >
                <option value="">Select a Subcategory</option>
                {category && SubcategoryMap[category].map((sub) => (
                    <option key={sub} value={sub}>
                        {sub}
                    </option>
                ))}
            </select>

            <p>Selected: {category} {subcategory ? `> ${subcategory}` : ""}</p>
        </div>
    );
};

export default ExpenseSelector;
