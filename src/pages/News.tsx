import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import NewsAdapter from '../components/News/NewsAdapter'

const News = () => {
  return (
    <Dashboard>
      <div className="flex items-center justify-between mb-10">
      <Header>News and Updates</Header>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <NewsAdapter date={new Date().toLocaleDateString()} desc='Random Nigga Random Niggi' title='Random News'/>
        <NewsAdapter date={new Date().toLocaleDateString()} desc='Random Nigga Random Niggi' title='Random News'/>
        <NewsAdapter date={new Date().toLocaleDateString()} desc='Random Nigga Random Niggi' title='Random News'/>
        <NewsAdapter date={new Date().toLocaleDateString()} desc='Random Nigga Random Niggi' title='Random News'/>
        <NewsAdapter date={new Date().toLocaleDateString()} desc='Random Nigga Random Niggi' title='Random News'/>
      </div>
    </Dashboard>
  )
}

export default News