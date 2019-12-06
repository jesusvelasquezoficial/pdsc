defmodule PdscServerWeb.BcvView do
  use PdscServerWeb, :view
  alias PdscServerWeb.BcvView

  def render("index.json", %{bcv: bcv}) do
    %{data: render_many(bcv, BcvView, "bcv.json")}
  end

  def render("show.json", %{bcv: bcv}) do
    %{data: render_one(bcv, BcvView, "bcv.json")}
  end

  def render("bcv.json", %{bcv: bcv}) do
    %{id: bcv.id,
      fecha: bcv.fecha,
      euro: bcv.euro,
      yuan: bcv.yuan,
      lira: bcv.lira,
      rublo: bcv.rublo,
      dolar: bcv.dolar}
  end
end
