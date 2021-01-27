import './index.less'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <div className="App">
      Antd App
      </div>
      <Button type="primary">Primary Button</Button>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
    </div>
  );
}

export default App;
