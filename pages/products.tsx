import Layout from '../components/Layout'
import MainPanel from '../components/MainPanel'
import Panel from '../components/Panel'
import SidePanel from '../components/SidePanel'
import Title from '../components/Title'
const Products = () => {
  return (
    <Layout>
      <Title text="Welcome to Products section!" className="drop-shadow" />
      <Panel>
        <SidePanel
          items={[
            { text: 'View all products', link: '/products' },
            { text: 'Add a new product', link: '/products/new' },
          ]}
        />
        <MainPanel>
          <div className="p-10"></div>
        </MainPanel>
      </Panel>
    </Layout>
  )
}

export default Products
