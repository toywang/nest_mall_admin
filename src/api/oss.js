import request from '@/utils/request'
export function policy() {
  return request({
    url:'/minio/upload/policy',
    method:'get',
  })
}
