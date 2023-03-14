import posts from '../../data/posts'
import Card from "../Card"

const Content = () => {
    return (
        <div className="col-span-12 md:col-span-8 h-[calc[100vh-3.75rem)] p-4 box-border">
            {posts.map((element, index) => (
                <Card 
                    key={index}
                     title={element.title}
                    likes={element.likes}
                    order={index + 1}
                    image={element.image}
                    desc={element.desc}
                />
            ))}
        </div>
    );
}
 
export default Content;