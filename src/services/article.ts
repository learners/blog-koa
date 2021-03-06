import Service from '@/common/service'
import { mergeFindOptions } from '@/models'

class ArticleService extends Service {
  /**
   * 获取所有文章
   */
  getList() {
    return this.models.Article.findAll(mergeFindOptions({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt']
      },
      include: 'author'
    }))
  }
  /**
   * 获取文章详情
   */
  getDetail(id: unknown) {
    return this.models.Article.findOne({
      where: { id },
      attributes: {
        exclude: ['deletedAt']
      }
    })
  }
}

export default ArticleService
