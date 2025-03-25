export default function ProjectList({projects}) {
        projects.map((item, indx) => {
            console.log(item);
            console.log(indx);
            return <img key={indx} src={item.img} />
       })
}