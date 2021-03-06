import {
  Sequelize,
  DataTypes,
  Model,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin
} from 'sequelize'
import type { UserModel } from './user'
import moment from 'moment'

export declare class ArticleModel extends Model {
  id: number
  title: string
  content: string
  authorId: number
  status: string

  readonly createdAt: Date
  readonly updatedAt: Date
  readonly deletedAt: Date

  getAuthor: HasOneGetAssociationMixin<UserModel>
  setAuthor: HasOneSetAssociationMixin<UserModel, number>
  createAuthor: HasOneCreateAssociationMixin<UserModel>
}

export default (sequelize: Sequelize) => {
  return sequelize.define<ArticleModel>('Article', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    content: {
      type: new DataTypes.TEXT('long'),
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER,
      field: 'author_id'
    },
    status: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        const createdAt = this.getDataValue('createdAt')
        return createdAt && moment(createdAt).format('YYYY-MM-DD HH:mm')
      }
    }
  }, {
    tableName: 'article'
  })
}
