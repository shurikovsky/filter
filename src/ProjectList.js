export default function ProjectList({projects}) {
        return projects.map((item, indx) => {
            return <img class="photo" key={indx} src={item.img} />
       })
}