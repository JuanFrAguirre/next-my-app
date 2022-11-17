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
        <SidePanel items={[{ text: 'View all products', link: '/products' }]} />
        <MainPanel>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            suscipit doloremque. Fugiat, inventore ab. Repudiandae voluptatum
            odio explicabo porro eligendi voluptates consectetur tenetur
            quisquam ducimus minima aliquid atque fuga qui, vero ratione itaque
            recusandae unde omnis aspernatur quod totam cumque eum nulla est?
            Saepe optio eum ratione veritatis maiores maxime non debitis earum,
            explicabo incidunt doloribus tempore molestiae recusandae
            consequuntur iusto delectus excepturi officiis omnis enim sequi,
            dolorum quos distinctio. Quisquam, ut cumque aut cupiditate
            similique obcaecati id repellendus illum, odit, hic totam
            consequuntur provident illo! Neque magnam minus laborum, veniam
            repudiandae vitae recusandae dicta, distinctio ea, rerum velit vero!
          </h1>
        </MainPanel>
      </Panel>
    </Layout>
  )
}

export default Products
