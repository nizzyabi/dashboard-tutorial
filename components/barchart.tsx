'use client'
import { CandlestickChart, User } from 'lucide-react';
import {
    BarChart as BarGraph,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Bar,
    CartesianGrid,
} from 'recharts'

export type BarChartProps = {
    data: { month: string; total: number }[]
}

export default function BarChart({ data }: BarChartProps) {
    return (
        <div className='shadow w-full flex flex-col gap-3 rounded-[6px] p-5 bg-slate-100/90'>
            <section className='flex justify-between gap-2 pb-2'>
                <p>User Data</p>
                <User className='h-4 w-4'/>
            </section>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarGraph data={data} margin={{ top: 20, left: -10, right: 10}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey={"month"}
                        tickLine={false}
                        axisLine={false}
                        fontSize={13}
                        padding={{ left: 10, right: 10}}
                    />
                    <YAxis 
                        dataKey={"total"}
                        tickLine={false}
                        axisLine={false}
                        fontSize={13}
                        allowDecimals={false}
                        padding={{ top: 10, bottom: 10}}
                        tickFormatter={(value) => `${value}`}
                    />
                    <Bar dataKey={"total"} radius={[5, 5, 0, 0]} stroke='black' fill='black' />
                </BarGraph>
            </ResponsiveContainer>
        </div>
    )
}