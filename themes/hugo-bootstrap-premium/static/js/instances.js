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
      const instances = shuffle(res.data)

      const lis = []
      instances.forEach(function (instance) {
        const el = createInstanceElement(instance)
        lis.push(el)
      })

      instancesListElement.append(lis)
    })
    .fail(function () {
      $('#instances-list-error').css('display', 'block')
    })

  function createInstanceElement (instance) {
    const a = $('<a>', {
      class: 'list-group-item',
      href: 'https://' + instance.host,
      target: '_blank',
      title: instance.host
    })

    const leftDiv = $('<div>', {
      class: 'left-div'
    })
    const rightDiv = $('<div>', {
      class: 'right-div'
    })

    const h4 = $('<h4>', {
      class: 'list-group-item-heading'
    })
    const spanName = $('<span>', {
      text: instance.name,
      class: 'instance-name'
    })
    const spanHost = $('<small>', {
      text: instance.host,
      class: 'instance-host'
    })
    h4.append(spanName, spanHost)
    leftDiv.append(h4)

    if (instance.shortDescription) {
      const p = $('<p>', {
        class: 'list-group-item-text',
        text: instance.shortDescription
      })
      leftDiv.append(p)
    }

    if (instance.totalInstanceFollowers) {
      const li = $('<li>', {
        text: instance.totalInstanceFollowers + ' followers'
      })
      rightDiv.append(li)

    }

    if (instance.totalInstanceFollowing) {
      const li = $('<li>', {
        text: 'Follows ' + instance.totalInstanceFollowing + ' instances'
      })
      rightDiv.append(li)
    }

    a.append(leftDiv, rightDiv)

    return a
  }

  // Thanks https://stackoverflow.com/a/6274381
  function shuffle (a) {
    for (var i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }

    return a
  }
})
