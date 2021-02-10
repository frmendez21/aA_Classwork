require_relative './piece.rb'
require 'singleton'

class NullPiece < Piece
  include Singleton

end