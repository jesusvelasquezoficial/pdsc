defmodule PdscServerWeb.BitcoinView do
  use PdscServerWeb, :view
  alias PdscServerWeb.BitcoinView

  def render("index.json", %{bitcoin: bitcoin}) do
    %{data: render_many(bitcoin, BitcoinView, "bitcoin.json")}
  end

  def render("show.json", %{bitcoin: bitcoin}) do
    %{data: render_one(bitcoin, BitcoinView, "bitcoin.json")}
  end

  def render("bitcoin.json", %{bitcoin: bitcoin}) do
    %{id: bitcoin.id,
      fecha: bitcoin.fecha,
      dolar: bitcoin.dolar}
  end
end
