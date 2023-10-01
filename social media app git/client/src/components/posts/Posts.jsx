import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = () => {

    // const posts = [
    //     {
    //         id: 1,
    //         name: "John Doe",
    //         userId: 1,
    //         profilePic: "/src/img/31.jpeg",
    //         desc: "Love For All, Hatred For None.",
    //         img: "/src/img/27.jpeg",
    //     },
    //     {
    //         id: 2,
    //         name: "John Doe",
    //         userId: 2,
    //         profilePic: "/src/img/32.jpg",
    //         desc: "Love For All, Hatred For None.",
    //         img: "/src/img/28.jpeg",
    //     },
    //     {
    //         id: 3,
    //         name: "John Doe",
    //         userId: 3,
    //         profilePic: "/src/img/33.jpeg",
    //         desc: "Love For All, Hatred For None.",
    //         img: "/src/img/29.jpeg",
    //     },
    //     {
    //         id: 3,
    //         name: "John Doe",
    //         userId: 3,
    //         profilePic: "/src/img/34.jpeg",
    //         desc: "Love For All, Hatred For None.",
    //         img: "/src/img/30.jpeg",
    //     },
    //     {
    //         id: 3,
    //         name: "John Doe",
    //         userId: 3,
    //         profilePic: "/src/img/2.jpeg",
    //         desc: "Love For All, Hatred For None.",
    //         img: "/src/img/31.jpeg",
    //     },
    // ]

    // return (
    //     <div className="posts">
    //         {posts.map}{post=>(               
    //             <Post post={post} key={post.id}/>           
    //         )}
    //     </div>
    // )

    const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
        return res.data;
    })
    );
    console.log(data);

    return (
    <div className="posts">
        {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
    );
}

export default Posts