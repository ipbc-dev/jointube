$(function () {
  const instancesApi = 'https://instances.peertu.be/api/v1/instances'
  const data = {
    start: 0,
    count: 100,
    signup: true,
    healthy: true
  }
  const instancesListElement = $('#instances-list')

  $.get(instancesApi, data)
    .done(function (res) {
      const instances = res.data

      const lis = []
      instances.forEach(function (instance) {
        const el = createInstanceElement(instance.host, instance.name, instance.shortDescription)
        lis.push(el)
      })

      instancesListElement.append(lis)
    })
    .fail(function (err) {
      $('#instances-list-error').css('display', 'block')
    })

  function createInstanceElement (host, name, description) {
    const a = $('<a>', {
      class: 'list-group-item',
      href: 'https://' + host,
      target: '_blank',
      title: host
    })

    const h4 = $('<h4>', {
      class: 'list-group-item-heading',
      text: name
    })
    a.append(h4)

    if (description) {
      const p = $('<p>', {
        class: 'list-group-item-text',
        text: description
      })
      a.append(p)
    }

    return a
  }
})
