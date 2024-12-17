interface Props{
    readonly title?:string,
    readonly text?:string;
    readonly type?:string;
  }
  
export const ItemList = ({title,text,type}:Props) => {
    return (
        <>
         {type === "colon" && (
            <li><strong>{title}:</strong>&nbsp;{text}</li>
         )}
         {type === "slash" && (
            <li><strong>{title}</strong>/{text}</li>
         )}
        </>
    )
}