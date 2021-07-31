import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'antd';

const Restaurant = () => {
    const [state, setstate] = useState([])
    const getData = async () =>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
    }
    useEffect(() => {
        setstate(getData())
        console.log("Data", getData())
    }, [])
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        }
      ];
    return (
        <React.Fragment>    
            <h4>Restaurant</h4>
            <Table columns={columns} dataSource={data} size="middle" />
        </React.Fragment>
    )
}

export default Restaurant
