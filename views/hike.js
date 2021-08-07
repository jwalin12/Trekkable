import { useTable } from 'react-table';
import { cloneElement } from 'react/cjs/react.production.min';

const data = React.useMemo( () => 
[
    { //TODO: replace these with something pulled from DB
        name: 'Brighu Lake',
        parkingLot: 'Empty',
        trailStatus: 'Open',
        bearSightings: 'none',
    }
])

const columns = React.useMemo(
    () => [
        {
            Header: 'Hike Info',
            columns :[
                {
                    Header: 'Parking Lot',
                    accessor: 'parkingLot'
                },
                {
                    Header: 'Trail Status',
                    accessor: 'trailStatus'
                },
                {
                    Header: 'Bear Sightings',
                    accessor: 'bearSightings'
                }
            ]
        }
    ]
)


const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })


const Hike = () => {
    return (
        <View>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        <th {...columns.getHeaderProps()}>{column.render('Header')}</th>
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
 {rows.map(row => {
   prepareRow(row)
   return (
     <tr {...row.getRowProps()}>
       {row.cells.map(cell => {
         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
       })}
     </tr>
   )
 })}
</tbody>

        </View>
    )
}


export default Hike;