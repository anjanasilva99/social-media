import { useContext } from "react"
import "./stories.scss"
import { AuthContext } from "../../context/AuthContext"

const Stories = () => {

    const { currentUser } = useContext(AuthContext)
    //Temporary data
    const stories = [
        {
            "id": 1,
            "name": "John Doe",
            "profilePic": "/src/img/3.jpeg",
        },
        {
            "id": 2,
            "name": "John Doe",
            "profilePic": "/src/img/21.jpg",
        },
        {
            "id": 3,
            "name": "John Doe",
            "profilePic": "/src/img/22.jpg",
        },
        {
            "id": 4,
            "name": "John Doe",
            "profilePic": "/src/img/23.jpg",
        },
        {
            "id": 5,
            "name": "John Doe",
            "profilePic": "/src/img/24.jpg",
        },
        {
            "id": 6,
            "name": "John Doe",
            "profilePic": "/src/img/25.jpg",
        }
    ]
    return (
        <div className="stories">
            <div className="story">
                    {/* <img src={currentUser.profilePic} alt=""/> */}
                    <img src="/src/img/26.jpg" alt=""/>
                    <span>{currentUser.name}</span>
                    <button>+</button>
            </div>
            {stories.map((story) => (
                <div className="story" key={story.id}>
                    <img src={story.profilePic} alt=""/>
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories
