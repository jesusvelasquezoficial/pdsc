defmodule PdscServerWeb.DtdView do
  use PdscServerWeb, :view
  alias PdscServerWeb.DtdView

  def render("index.json", %{dtd: dtd}) do
    %{data: render_many(dtd, DtdView, "dtd.json")}
  end

  def render("show.json", %{dtd: dtd}) do
    %{data: render_one(dtd, DtdView, "dtd.json")}
  end

  def render("dtd.json", %{dtd: dtd}) do
    %{id: dtd.id,
      fecha: dtd.fecha,
      euro: dtd.euro,
      dolar: dtd.dolar}
  end
end
