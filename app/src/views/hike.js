import { useTable } from 'react-table';
import { cloneElement } from 'react/cjs/react.production.min';
import { useState } from 'react';

// const data = React.useMemo( () => 
// [
//     { //TODO: replace these with something pulled from DB
//         name: 'Brighu Lake',
//         parkingLot: 'Empty',
//         trailStatus: 'Open',
//         bearSightings: 'none',
//     }
// ])

// const columns = React.useMemo(
//     () => [
//         {
//             Header: 'Hike Info',
//             columns :[
//                 {
//                     Header: 'Parking Lot',
//                     accessor: 'parkingLot'
//                 },
//                 {
//                     Header: 'Trail Status',
//                     accessor: 'trailStatus'
//                 },
//                 {
//                     Header: 'Bear Sightings',
//                     accessor: 'bearSightings'
//                 }
//             ]
//         }
//     ]
// )


// const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//    } = useTable({ columns, data })


const Hike = () => {
    return SwipeList()
}


const SwipeList = () => {
    function Basic() {
        const [listData, setListData] = useState(
            Array(20)
                .fill('')
                .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
        );
    
        const closeRow = (rowMap, rowKey) => {
            if (rowMap[rowKey]) {
                rowMap[rowKey].closeRow();
            }
        };
    
        const deleteRow = (rowMap, rowKey) => {
            closeRow(rowMap, rowKey);
            const newData = [...listData];
            const prevIndex = listData.findIndex(item => item.key === rowKey);
            newData.splice(prevIndex, 1);
            setListData(newData);
        };
    
        const onRowDidOpen = rowKey => {
            console.log('This row opened', rowKey);
        };
    
        const renderItem = ({item, index}) => (
            <Box>
                <Pressable
                    onPress={() => console.log('You touched me')}
                    alignItems= 'center'
                    bg="white"
                    borderBottomColor= 'trueGray.200'
                    borderBottomWidth= {1}
                    justifyContent= 'center'
                    height= {50}
                    underlayColor={'#AAA'}
                    _pressed={{
                      bg:'trueGray.200'
                    }}
                    py={8}
                >
    
                      <HStack width="100%" px={4}>
                        <HStack space={2} alignItems="center">
                          <Avatar color="white" bg={"secondary.700"}>
                            {index}
                          </Avatar>
                          <Text>
                            {item.text}
                          </Text>
                        </HStack>
                      </HStack>
                </Pressable>
                </Box>
        );
    
        const renderHiddenItem = (data, rowMap) => (
            <HStack
            flex= {1}
            pl={2}
            >
                <Pressable
                 px={4}
                  ml='auto'
                  cursor="pointer"
                  bg="dark.500"
                  justifyContent="center"
                  onPress={() => closeRow(rowMap, data.item.key)}
                  _pressed={{
                      opacity: 0.5
                    }}
                  >
                    <Icon as={<ArrowUpIcon/>} color='white'/>
                </Pressable>
                <Pressable
                  px={4}
                  cursor="pointer"
                  bg="red.500"
                  justifyContent="center"
                  onPress={() => deleteRow(rowMap, data.item.key)}
                  _pressed={{
                      opacity: 0.5
                    }}
                  >
                    <Icon as={<AntDesign name="edit"/>} color="white" />
               </Pressable>
            </HStack>
        );
    
        return (
            <Box  bg= 'white' safeArea
            flex= {1}>
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-130}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                />
            </Box>
        );
    }

    return Basic()



}


export default Hike;