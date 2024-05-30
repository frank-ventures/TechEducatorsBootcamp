const sensitiveInfo = [
  {
    id: 1,
    username: "Fred",
    sensitiveNumber: "04gs200123030312322gse2000gs20"
  },
  {
    id: 2,
    username: "Tom",
    sensitiveNumber: "553gs431356dgs763455s3454"
  },
  {
    id: 3,
    username: "Kiev",
    sensitiveNumber: "9g97331238978sge67sge6789971"
  },
  {
    id: 4,
    username: "Calen",
    sensitiveNumber: "775seg64s3455573337863gesg6677"
  },
  {
    id: 5,
    username: "Prometheus",
    sensitiveNumber: "27gseg52757dg77578675egs65875"
  }
];
export function GET() {
  return new Response(JSON.stringify(sensitiveInfo));
}
