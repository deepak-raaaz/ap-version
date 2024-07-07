import { Badge } from './ui/badge'
import { Button } from './ui/button'
import BlogImage from "../assets/images/blog-image.png";

const BlogCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-2 cursor-pointer dark:bg-slate-950">
          <img
            src={BlogImage}
            alt=""
            className="rounded-xl aspect-video mb-3 w-full"
          />
          <span className="text-sm mx-2 text-slate-500">3 days ago</span>
          <div className="flex space-x-2 my-2 mx-1 ">
            <Badge variant="secondary" className="text-slate-600">
              tag 1
            </Badge>
            <Badge variant="secondary" className="text-slate-600">
              tag 2
            </Badge>
            <Badge variant="secondary" className="text-slate-600">
              tag 3
            </Badge>
          </div>
          <h2 className="text-lg font-semibold mx-2 !mt-2">Heading 1</h2>
          <p className="text-slate-700 mx-2 dark:text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus sit sit facilisis dictumst.</p>
          <div className="flex justify-end mx-2">
          <Button variant="secondary" className="border-blue-400 border text-blue-500 bg-blue-100 my-2 dark:bg-slate-900 dark:border-blue-800 dark:hover:bg-slate-800">Read more</Button>
          </div>
        </div>
  )
}

export default BlogCard