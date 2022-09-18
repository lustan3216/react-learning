import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import toolStyle from './tool.module.css'
import ButtonMy from './components/buttonMy'
import { Button, DatePicker, Space, Card } from 'antd';
import { useEffect, useState } from "react"
import usePageStore from "./stores/page"

function App() {
  const page = usePageStore((state) => state.page)
  const [items, setList] = useState([])

  useEffect(() => {
    axios.get(`https://catfact.ninja/facts?page=${page}`)
      .then(({ data }) => {
        setList([...items, ...data.data])
      })
    console.log(page)
  }, [page])

  return (
    <div className="App">
      <header className="App-header">

        <ButtonMy />

        {
          items.map((item, index) => {
            return (
              <Card
                key={item.fact + index}
                style={{ width: 300 }}
              >
                {index+1}. { item.fact }
              </Card>
            )
          })
        }

      </header>
    </div>
  );
}



export default App
