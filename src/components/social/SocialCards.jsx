
export default function SocialCards(props) {
    return (
        <div className="relative my-16 flex justify-between flex-col bg-slate-100 dark:bg-gray-700 rounded-lg  shadow-xl">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                <div className="block relative w-full">
                    <img alt={props.alt} src={props.img} className="mx-auto object-cover grayscale rounded-full h-36 w-48  border-2 border-white dark:border-gray-800" />
                </div>
            </div>
            <div className=" px-4 py-4 pt-24 ">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        {props.name}
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                        {props.job}
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                        {props.desc}
                    </p>
                </div>
            </div>
            <div>
                {props.social}
            </div>
        </div>

    )
}
