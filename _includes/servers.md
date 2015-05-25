{% for server in site.data.servers %}
	{% if server.type == "gametracker" %}
* {% include gametracker_link.md name=server.name  host=server.host %}
	{% elsif server.type == "tsviewer" %}
* {% include tsviewer_link.md name=server.name host=server.host reg_id=server.reg_id %}
	{% else %}
* {% include server_link.md name=server.name  host=server.host %}
	{% endif %}
{% endfor %}
