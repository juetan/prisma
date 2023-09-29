// @ts-ignore
import type { PrismaClient } from '@prisma/client'

import testMatrix from './_matrix'

declare let prisma: PrismaClient

testMatrix.setupTestSuite(() => {
  test('findFirst', async () => {
    await prisma.user.findFirst()
  })

  test('findMany', async () => {
    await prisma.user.findMany()
  })
})