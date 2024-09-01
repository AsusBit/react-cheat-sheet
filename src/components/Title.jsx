export default function Title({text, children}){
    const title = "mt-10 mr-5 text-[4rem]"
    return (
        <p className={title}>
            {text || children}
      </p>
    )
}