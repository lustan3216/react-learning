import { Button } from "antd"
import usePageStore from "../stores/page"

export default function ButtonMy(props) {
  const pageUp = usePageStore((state) => state.pageUp)

  return (
    <Button onClick={() => pageUp()} style={{ background: 'red' }}>
      { props.children ? props.children : 'My button next page'}
    </Button>
  )
}
