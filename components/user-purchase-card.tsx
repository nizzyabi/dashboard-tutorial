export type UserPurchaseProps = {
    name: string;
    email: string;
    image: any;
    saleAmount: string;
}

export default function UserPurchaseCard(props: UserPurchaseProps) {
    const defaultImage = './mesh.png'
    return (
        <div className="flex flex-wrap justify-between gap-3">
            <section className="flex justify-between gap-3">
                <div className="h-12 w-12 rounded-full">
                    <img width={300} height={300} src={props.image || defaultImage} alt='avatar' className="rounded-full h-12 w-12"/>
                </div>
                <div className="text-sm">
                    <p>{props.name}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto opacity-30">
                        {props.email}
                    </div>
                </div>
            </section>
            <p className='text-sm'>{props.saleAmount}</p>
        </div>
    )
}