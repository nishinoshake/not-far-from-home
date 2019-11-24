import { normalize } from '@/lib/normalizer'

describe('normalizer', () => {
  describe('normalize', () => {
    test('配列を指定したキーのオブジェクトに変換できる', () => {
      const collection = [
        { key: 100, name: 'hoge' },
        { key: 200, name: 'fuga' }
      ]

      const expected = {
        100: { key: 100, name: 'hoge' },
        200: { key: 200, name: 'fuga' }
      }

      expect(normalize(collection, 'key')).toEqual(expected)
    })

    test('第2引数を指定しない場合、IDをキーに変換できる', () => {
      const collection = [
        { id: 10, name: 'hoge' },
        { id: 20, name: 'fuga' }
      ]

      const expected = {
        10: { id: 10, name: 'hoge' },
        20: { id: 20, name: 'fuga' }
      }

      expect(normalize(collection)).toEqual(expected)
    })
  })
})
