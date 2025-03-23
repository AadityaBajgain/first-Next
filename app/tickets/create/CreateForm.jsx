"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"

export default function CreateForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [priority, setPriority] = useState("low");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const ticket = {
            title,body,priority,user_email:"hello world"
        }
        const res = await fetch("http://localhost:4000/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        });
        setIsLoading(false);
        if (res.ok) {
            router.push("/tickets");
        }
    }
    return (
        <form className="w-1/2 py-4 px-7 
    rounded-md 
    block 
    mx-auto 
    min-w-fit" onSubmit={handleSubmit}>
            <h2>Add a new Ticket</h2>
            <label htmlFor="title" className="block">Title</label>
            <input
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="block 
    mt-2 my-4 px-2 py-1 
    rounded-sm w-full"
            />
            <label htmlFor="description" className="block">Description</label>
            <textarea
                required
                onChange={e => setBody(e.target.value)}
                value={body}
                className="block 
    mt-2 my-4 px-2 py-1 
    rounded-sm w-full"
            />
            <label htmlFor="priority" className="block">
                <span>Priority</span>
                <select
                    required
                    onChange={e => setPriority(e.target.value)}
                    value={priority}
                    className="block 
    mt-2 my-4 px-2 py-1 
    rounded-sm w-full"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <button
                disabled={isLoading}
                className="block mx-auto"
            >
                {isLoading ? "Adding..." : "Submit"}
            </button>
        </form>
    )
}
