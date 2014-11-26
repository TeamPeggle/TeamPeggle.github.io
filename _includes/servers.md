{% for server in site.data.servers %}
	{% if server.type == "gametracker" %}
* {% include gametracker_link.md name=server.name  host=server.host %}
	{% else %}
* {% include server_link.md name=server.name  host=server.host %}
	{% endif %}
{% endfor %}
